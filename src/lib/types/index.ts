export type Fetch = (
	input: RequestInfo | URL,
	init?: RequestInit
) => Promise<Response>

export type MigrantWorker =  {
	fin: string;
	userType: number;
	status: number;
	locale: string;
	enabledPNC: string;
	name: string;
	gender: string;
	employerName: string;
	employerUen: string;
	sector: string;
	occupation: string;
	deviceId: string;
	refreshToken: string;
	authKey: string;
	refreshTokenValidity: string;
	refreshToken1: string;
	refreshToken2: string;
	lastLoginAt: Date;
	lastRefreshAt: Date;
	lastLogoutAt: Date;
	lastRestAt: Date;
	lastSSOAt: Date;
	createAt: Date;
	createBy: string;
	updateAt: Date;
	updateBy: string;
}