import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { SvmSpoke as SvmSpokeAnchor } from "./svm_spoke";
import * as SvmSpokeIdl from "./svm_spoke.json";

export function getDevnetSpokePoolProgram(provider: AnchorProvider): Program<SvmSpokeAnchor> {
  const program = new Program<SvmSpokeAnchor>(SvmSpokeIdl, provider);
  return program;
}
