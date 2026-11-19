export function publish() {
  if (process.env.SRW_TEST_INTERRUPT_AFTER_PUBLISH === 'true') {
    throw new Error('Deliberate acceptance interruption after workspace publication');
  }
}
