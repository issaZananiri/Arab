(this["webpackJsonpthefront-js--react-scripts"]=this["webpackJsonpthefront-js--react-scripts"]||[]).push([[11],{819:function(e,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return b}));var t=n(1),a=n(0),i=(n(2),n(785)),r=n(751),l=n(6),c=n(184),s=n(4),d=[{name:"badgeColor",type:"string",default:"",description:"Badge color of the job card"},{name:"badgeTitle",type:"string",default:"",description:"Badge title of the job card"},{name:"jobLocation",type:"string",default:"",description:"Job location of the card"},{name:"jobTitle",type:"string",default:"",description:"Job title of the card"},{name:"jobType",type:"string",default:"",description:"Job type of the card"},{name:"className",type:"string",default:"",description:"External classes"}],b=function(e){var o=Object.assign({},e);return Object(a.jsxs)("div",Object(t.a)(Object(t.a)({},o),{},{children:[Object(a.jsx)(c.e,{title:"Description",gutterBottom:!0,children:Object(a.jsx)(c.b,{title:"CardJobTag",path:"src/components/organisms/CardJobMinimal/CardJobMinimal.js",description:"Component to display the job minimal card"})}),Object(a.jsx)(c.e,{title:"Import",gutterBottom:!0,children:Object(a.jsx)(c.a,{code:"\nimport { CardJobTag } from 'components/organisms';\n// or\nimport CardJobTag from 'components/organisms/CardJobTag';\n"})}),Object(a.jsx)(c.e,{title:"Props & Methods",gutterBottom:!0,children:Object(a.jsx)(c.d,{dataProperties:d})}),Object(a.jsx)(c.e,{title:"Basic Example",gutterBottom:!0,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(a.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(a.jsxs)(r.a,{container:!0,spacing:2,children:[Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Senior Developer",badgeColor:l.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time"})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Web designer internship",badgeColor:l.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time"})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"UI/UX Designer",badgeColor:l.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time"})})]})})}),Object(a.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardJobTag } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(a.jsx)(c.e,{title:"Outlined",gutterBottom:!0,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(a.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(a.jsxs)(r.a,{container:!0,spacing:2,children:[Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Senior Developer",badgeColor:l.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time",variant:"outlined"})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Web designer internship",badgeColor:l.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",variant:"outlined"})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"UI/UX Designer",badgeColor:l.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",variant:"outlined"})})]})})}),Object(a.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardJobTag } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(a.jsx)(c.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(a.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(a.jsxs)(r.a,{container:!0,spacing:2,children:[Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Senior Developer",badgeColor:l.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time",withShadow:!0,liftUp:!0})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"Web designer internship",badgeColor:l.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",withShadow:!0,liftUp:!0})}),Object(a.jsx)(r.a,{item:!0,xs:4,children:Object(a.jsx)(s.h,{jobTitle:"UI/UX Designer",badgeColor:l.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",withShadow:!0,liftUp:!0})})]})})}),Object(a.jsx)(c.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, colors } from \'@material-ui/core\';\nimport { CardJobTag } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJobTag\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);