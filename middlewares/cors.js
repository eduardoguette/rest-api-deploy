import cors from 'cors'
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:56119',
  'https://rest-api-deploy-cbm8-dev.fl0.io/'
]
export const corsMiddleware = (acceptedOrigins = ACCEPTED_ORIGINS) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) return callback(null, true)

      if (!origin) return callback(null, true)

      callback(new Error('Not allowed by CORS'))
    }
  })
