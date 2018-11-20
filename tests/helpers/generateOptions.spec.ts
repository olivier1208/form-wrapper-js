import generateOptions from '../../src/helpers/generateOptions'
import defaultOptions from '../../src/defaults'

describe('generateOptions.ts', () => {
  it('should generate new options object from default options and new options Object', () => {
    expect(defaultOptions.successfulSubmission.resetData).toBe(true)
    expect(defaultOptions.successfulSubmission.clearErrors).toBe(true)
    expect(defaultOptions.validation.onSubmission).toBe(true)
    expect(defaultOptions.validation.stopAfterFirstRuleFailed).toBe(true)

    const newOptions = generateOptions(defaultOptions, {
      successfulSubmission: {
        resetData: false
      },
      validation: {
        onSubmission: false
      }
    })

    expect(newOptions.successfulSubmission.resetData).toBe(false)
    expect(newOptions.successfulSubmission.clearErrors).toBe(true)
    expect(newOptions.validation.onSubmission).toBe(false)
    expect(newOptions.validation.stopAfterFirstRuleFailed).toBe(true)
  });
})
