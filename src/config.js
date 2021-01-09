const config = {
  STRIPE_KEY: 'pk_test_51HzmUIBbPTNbzFmn8qXeC8mukwHUFd3xCUIn85dbTP1K65XFwiZ0NmO8ACBu4P68vsGq4nRC7va5V3PvaGxUwYjH00kVA7TevT',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'jlnrc-notes-app-upload',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://yzxa8rjpy7.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_KnQ6UABc0',
    APP_CLIENT_ID: '4lhp32t6nqvo83ljmc2dbk1so4',
    IDENTITY_POOL_ID: 'us-east-1:f6aa14cc-8d51-45bb-83ac-92e63be8c896',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
