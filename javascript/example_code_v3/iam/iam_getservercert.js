/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This sample is part of the SDK for JavaScript Developer Guide (scheduled for release September 2020) topic at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/iam-examples-server-certificates.html.

Purpose:
iam_getservercert.js demonstrates how to retrieve information about an IAM SSL/TLS Server Certificate.

Inputs (into command line below):
- REGION
- CERTIFICATE_NAME

Running the code:
node iam_getservercert.js REGION CERTIFICATE_NAME
 */
// snippet-start:[iam.JavaScript.v3.certs.getServerCertificate]
// Import required AWS SDK clients and commands for Node.js
const {IAMClient, GetServerCertificateCommand} = require("@aws-sdk/client-iam");
// Set the AWS Region
const region = process.argv[2];
// Create IAM service object
const iam = new IAMClient(region);
// Set the parameters
const params = {ServerCertificateName: process.argv[3]};

async function run() {
  try {
    const data = await iam.send(new GetServerCertificateCommand(params));
    console.log("Success", data);
  }
  catch (err) {
    console.log("Error", err);
  }
};
// snippet-end:[iam.JavaScript.v3.certs.getServerCertificate]
exports.run = run; //for unit tests only
