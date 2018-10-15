
export module CliGlobal {
	export enum DebugReportingLevel {
		None,
		Low,
		Medium,
		High,
	}

	export module Debug {
		export const DebugLog = false;
		export const DebugLevel = DebugReportingLevel.Low;
		export function Verbose(): boolean {
			return this.DebugLevel == DebugReportingLevel.High;
		}
	}
}