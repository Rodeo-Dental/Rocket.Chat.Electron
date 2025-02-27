import * as core from '@actions/core';

import { runElectronBuilder } from './shell';

export const packOnWindows = async (): Promise<void> => {
  await runElectronBuilder(`--ia32 --x64 --win msi`, {
    CSC_LINK: core.getInput('win_csc_link'),
    CSC_KEY_PASSWORD: core.getInput('win_csc_key_password'),
  });

  await runElectronBuilder(`--ia32 --x64 --win appx`);
};
