import { describe, it, expect, vi, beforeEach } from 'vitest';
import { imposeTariff } from '../index';

// Mock console methods
const mockConsole = {
  log: vi.fn(),
  warn: vi.fn(),
};

// Mock require
const mockRequire = vi.fn(() => ({ format: (): string => '2024-01-01' }));

// Mock config
vi.mock('../../tariff.config', () => ({
  default: {
    policies: {
      'china-module': {
        action: 'block',
      },
      lodash: {
        action: 'delay',
        tariffRate: 30,
      },
      axios: {
        action: 'log',
        tariffRate: 20,
      },
      react: {
        action: 'delay',
        tariffRate: 45,
      },
    },
  },
}));

describe('imposeTariff', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock global console
    global.console = mockConsole as any;
  });

  it('should handle module not found errors', async () => {
    await expect(imposeTariff('test-module')).rejects.toThrow("Cannot find module 'test-module'");
  });

  it('should block imports for blocked packages', async () => {
    await expect(imposeTariff('china-module')).rejects.toThrow('Import Blocked');
  });

  it('should delay imports for delayed packages', async () => {
    const startTime = Date.now();
    await imposeTariff('lodash');
    const endTime = Date.now();

    // lodash has a 30% tariff rate, so delay should be 300ms
    expect(endTime - startTime).toBeGreaterThanOrEqual(300);
    expect(mockConsole.log).toHaveBeenCalled();
  });

  it('should log warnings for logged packages', async () => {
    await imposeTariff('axios');
    expect(mockConsole.warn).toHaveBeenCalled();
  });

  it('should apply different tariff rates correctly', async () => {
    const startTime = Date.now();
    await imposeTariff('react'); // 45% tariff rate = 450ms delay
    const endTime = Date.now();

    expect(endTime - startTime).toBeGreaterThanOrEqual(450);
  });
});
