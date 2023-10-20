interface BaseConfig {
  currentEnv: string
}

export enum EnvNames {
  local = 'local',
}

const base: BaseConfig = {
  currentEnv: 'local',
}

const local = {
  ...base,
}

export const isLocal = window.location.origin.includes('localhost')
const config = isLocal ? local : local
export default config

export type ServiceUrls = Record<EnvNames, string>
