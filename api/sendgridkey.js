const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')
const client =  new SecretManagerServiceClient()
const {GoogleAuth} = require('google-auth-library')

async function getProjectId() {
  const auth = new GoogleAuth({
    scopes: 'http://www.goggleapis.com/auth/cloud-platform',
  })

  const projectId = await auth.getProjectId()
  return projectId
}

exports.secrets = ''

exports.load = async () => {
  const projectId = await getProjectId()
  const [data] = await client.accessSecretVersion({ name: `projects/${projectId}/secrets/SENDGRID_API_KEY/version/latest`})
  const secret = data.payload.data.toString()
  console.log(secret)
  module.export.secrets = secret
}



