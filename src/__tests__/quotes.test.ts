import { describe, it, expect } from 'vitest';
import { getQuote } from '../quotes';

describe('getQuote', () => {
  it('should generate a quote with the correct format', () => {
    const result = getQuote({ pkg: 'test-package', action: 'log', rate: 25 });

    // Check if the quote contains all required parts
    expect(result).toContain('test-package');
    expect(result).toContain('25%');
    expect(result).toContain('🗣️');
    expect(result).toContain('📊');
  });

  it('should generate different quotes for different actions', () => {
    const blockQuote = getQuote({ pkg: 'test-package', action: 'block' });
    const delayQuote = getQuote({ pkg: 'test-package', action: 'delay', rate: 30 });
    const logQuote = getQuote({ pkg: 'test-package', action: 'log', rate: 20 });

    // Each quote should be different
    expect(blockQuote).not.toBe(delayQuote);
    expect(blockQuote).not.toBe(logQuote);
    expect(delayQuote).not.toBe(logQuote);
  });

  it('should handle packages with special characters', () => {
    const result = getQuote({ pkg: 'test-package@1.0.0', action: 'log', rate: 25 });
    expect(result).toContain('test-package@1.0.0');
  });

  it('should work without a rate parameter', () => {
    const result = getQuote({ pkg: 'test-package', action: 'block' });
    expect(result).toContain('test-package');
    expect(result).toContain('No free rides here, folks');
  });
});
