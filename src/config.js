const config = {
    s3: {
      REGION: "eu-east-1",
      BUCKET: "jlnrc-notes-app-upload",
    },
    apiGateway: {
      REGION: "eu-east-1",
      URL: "https://b5w89qaij2.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-east-1",
      USER_POOL_ID: "us-east-1_KnQ6UABc0",
      APP_CLIENT_ID: "4lhp32t6nqvo83ljmc2dbk1so4",
      IDENTITY_POOL_ID: "us-east-1:060cc378-e46b-42a8-bdf4-d487bca89cfd",
    },
  };
  
  export default config;