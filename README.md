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
