import config, { EnvNames, ServiceUrls } from '@/config'

const serviceUrls: ServiceUrls = {
  local: 'http://localhost:3000',
}
export const apparelUrl = serviceUrls[config.currentEnv as keyof typeof EnvNames]
