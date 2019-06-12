# lambda-setup-cloudformation
Just a basic repo for demonstrating cloudformation, lambdas, and setting up codepipeline

You will need to generate a personal Access token on Github.
  To do this you will need to login into Github, and go to https://github.com/settings/tokens
  Generate a new token for the OAuthToken.  You will use this key in the template, to generate the webhook for Github to 
  trigger your codepipeline build.
  You will need to allow the following scopes for your OAuthToken
      admin:repo_hook
    +   read:public_key

  If you entend to use a private repo you will also need the following
    + repo
  Ensure that you keep the OAuthToken secure, as it gives asscess to your Github account.

1. get into AWS
2. Go to Cloudformation
3. Create a new stack
4. fill in the parameters on the CodePipelineTemplate.yml to your needs or just keep them the way they are
  a. you will need a OAuthKey for Github, look at the instructions above for this key
5. upload the CodePipelineTemplate.yml file
6. create the stack
7. Get the BasicLambdaRole ARN and fill in the parameter in template.yml
8. Go to CodePipeline on AWS, and select the CodePipeline. Labeled CodePipelineTemplateTutorial from this tutorial
9. Release the commit
10. Watch the CI/CD pipeline succeed and commit your code to lambda
11. Go to Lambda and see the HelloWorld Lambda.
12. to run it, select `Select a test event`, and configure the json payload
13. Create the test event
14. Run
15. See the results in the Lambda logs. Click on Monitoring -> View logs in CloudWatch -> click on the Log Stream
16. Yep im happy, Hello World!