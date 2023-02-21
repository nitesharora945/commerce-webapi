"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[3955],{49804:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return l}});var a=n(87462),o=n(63366),r=(n(15007),n(64983)),i=n(91515),m=["components"],s={},p={_frontmatter:s},d=i.Z;function l(e){var t=e.components,n=(0,o.Z)(e,m);return(0,r.mdx)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"generate-the-admin-token"},"Generate the admin token"),(0,r.mdx)("p",null,"In a production environment, you would typically ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/create-integration"},"create an integration")," and use OAuth to provide authentication for any REST call that requires admin privileges. This process allows Adobe Commerce to verify that the caller is authorized to access the affected system resource."),(0,r.mdx)("p",null,"In this tutorial, we will supply an admin token instead. To get a token, you must have 2FA configured. This tutorial assumes that you are using Google Authenticator as your 2FA solution. The endpoint and payload will be different for other 2FA solutions. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/testing/functional-testing-framework/two-factor-authentication/"},"Two-Factor Authentication")," for more information."),(0,r.mdx)("p",null,"Your request must specify the admin user's ",(0,r.mdx)("inlineCode",{parentName:"p"},"username"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"password")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"otp")," (one time password). The ",(0,r.mdx)("inlineCode",{parentName:"p"},"otp")," value is the six-digit authorization code that Google Authenticator generates."),(0,r.mdx)("p",null,"By default, an admin token is valid for 4 hours. To change this value, log in to Admin and go to ",(0,r.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,r.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,r.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Services")," > ",(0,r.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,r.mdx)("strong",{parentName:"p"},"Access Token Expiration")," > ",(0,r.mdx)("strong",{parentName:"p"},"Admin Token Lifetime (hours)"),"."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-webapi/get-started/authentication/gs-authentication-token"},"Token-based authentication")," for more information about authorization tokens."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/tfa/provider/google/authenticate")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Headers:")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Content-Type")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"application/json")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Payload:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "<admin-password>",\n  "otp": "<otp-value>"\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("p",null,"Commerce generates the admin's access token"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"5r8cvmpr11j6gmau8990rcj2qk7unh8i")),(0,r.mdx)("p",null,"This token must be specified in the authorization header of every call that requires ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"admin")," permissions."),(0,r.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,r.mdx)("p",null,"There are no additional verification steps. Tokens are not displayed in Admin."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-prerequisite-tasks-index-md-72ef93bd242169e60ba3.js.map