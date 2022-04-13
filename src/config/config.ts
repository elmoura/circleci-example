import 'dotenv/config';

export const getConfig = () => ({
  appPort: Number(process.env.PORT) || 3030,
})