"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[7269],{76763:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var a,r=n(87462),d=n(63366),l=(n(15007),n(64983)),i=n(91515),m=["components"],o={},p=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),u={_frontmatter:o},x=i.Z;function s(e){var t=e.components,n=(0,d.Z)(e,m);return(0,l.mdx)(x,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"urlresolver-query"},"urlResolver query"),(0,l.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"urlResolver")," query has been deprecated. Use the ",(0,l.mdx)("a",{parentName:"p",href:"route.md"},"route")," query instead."),(0,l.mdx)("p",null,"A merchant can reconfigure (rewrite) the URL to any product, category, or CMS page. When the rewrite goes into effect, any links that point to the previous URL are redirected to the new address."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"urlResolver")," query returns the canonical URL for a specified product, category, or CMS page. An external app can render a page by a URL without any prior knowledge about the landing page."),(0,l.mdx)("h2",{id:"syntax"},"Syntax"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"{urlResolver(url: String!): EntityUrl}")),(0,l.mdx)("h2",{id:"example-usage"},"Example usage"),(0,l.mdx)("h3",{id:"query-the-urls-information"},"Query the URL's information"),(0,l.mdx)("p",null,"The following query returns information about the URL containing ",(0,l.mdx)("inlineCode",{parentName:"p"},"joust-duffle-bag.html"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Request:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},'{\n  urlResolver(url: "joust-duffle-bag.html") {\n    entity_uid\n    relative_url\n    redirectCode\n    type\n  }\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Response:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "urlResolver": {\n      "entity_uid": "MQ==",\n      "relative_url": "joust-duffle-bag.html",\n      "redirectCode": 0,\n      "type": "PRODUCT"\n    }\n  }\n}\n')),(0,l.mdx)("h2",{id:"input-attributes"},"Input attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"urlResolver")," query contains the following attribute."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"url")),(0,l.mdx)("td",{parentName:"tr",align:null},"String!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The requested URL. To query for product and category pages, the ",(0,l.mdx)("inlineCode",{parentName:"td"},"url")," value must contain the URL key and suffix. For CMS page queries, the ",(0,l.mdx)("inlineCode",{parentName:"td"},"url")," value must contain the URL key only.")))),(0,l.mdx)("h2",{id:"output-attributes"},"Output attributes"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"EntityUrl")," output object contains the ",(0,l.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"relative_url"),", and ",(0,l.mdx)("inlineCode",{parentName:"p"},"type")," attributes."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"canonical_url")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,l.mdx)("inlineCode",{parentName:"td"},"relative_url")," instead")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"entity_uid")),(0,l.mdx)("td",{parentName:"tr",align:null},"ID!"),(0,l.mdx)("td",{parentName:"tr",align:null},"The unique ID assigned to the object associated with the specified ",(0,l.mdx)("inlineCode",{parentName:"td"},"url"),", such as ",(0,l.mdx)("inlineCode",{parentName:"td"},"ProductInterface"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"CategoryInterface"),", or ",(0,l.mdx)("inlineCode",{parentName:"td"},"CmsPage"),". This could be a product, category, or CMS ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"id")),(0,l.mdx)("td",{parentName:"tr",align:null},"Int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,l.mdx)("inlineCode",{parentName:"td"},"entity_uid")," instead. The ID assigned to the object associated with the specified ",(0,l.mdx)("inlineCode",{parentName:"td"},"url"),". This could be a product ID, category ID, or page ID")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"redirectCode")),(0,l.mdx)("td",{parentName:"tr",align:null},"Int"),(0,l.mdx)("td",{parentName:"tr",align:null},"Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"relative_url")),(0,l.mdx)("td",{parentName:"tr",align:null},"String"),(0,l.mdx)("td",{parentName:"tr",align:null},"The internal relative URL. If the specified  ",(0,l.mdx)("inlineCode",{parentName:"td"},"url")," is a redirect, the query returns the redirected URL, not the original")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"type")),(0,l.mdx)("td",{parentName:"tr",align:null},"UrlRewriteEntityTypeEnum"),(0,l.mdx)("td",{parentName:"tr",align:null},"The value of ",(0,l.mdx)("inlineCode",{parentName:"td"},"UrlRewriteEntityTypeEnum")," is one of PRODUCT, CATEGORY, or CMS_PAGE")))),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"products.md"},"Products query")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-products-queries-url-resolver-md-47105e31196bd8ba869e.js.map