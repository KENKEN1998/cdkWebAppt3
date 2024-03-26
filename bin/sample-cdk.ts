#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { devParameter } from '../parameter';
import { VpcStackProps, VpcStack} from '../lib/vpc-stack';
import { Vpc } from 'aws-cdk-lib/aws-ec2';

const app = new cdk.App();

// const s3StackProps : S3StackProps = {
//   s3BucketName : devParameter.s3BucketName,
//   env: {
//     account: devParameter.env?.account || process.env.CDK_DEFAULT_ACCOUNT,
//     region: devParameter.env?.region || process.env.CDK_DEFAULT_REGION,
//   },
//   tags: {
//     Project: 'sample-cdk',
//     Environment: devParameter.envName,
//   },
// }

// const s3staName = devParameter.envName + '-' + devParameter.s3BucketName;
// const s3sta = new S3Stack(app, s3staName, s3StackProps);

const vpcStackProps: VpcStackProps = {
  vpcName: devParameter.vpcName || 'lab81-proj-vpc',
  vpcMaxAzs: devParameter.vpcMaxAzs || 2,
  vpcNatGateways: devParameter.vpcNatGateways || 1,
  natGatewaySubnetCidr: devParameter.natGatewaySubnetCidr || 24,
  ec2SubnetCidr: devParameter.ec2SubnetCidr || 24,
  rdsSubnetCidr: devParameter.rdsSubnetCidr || 24,
  env: {
    account: devParameter.env?.account || process.env.CDK_DEFAULT_ACCOUNT,
    region: devParameter.env?.region || process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    Project: 'sample-cdk',
    Environment: devParameter.envName,
  },
}

const vpcstaName = devParameter.envName + '-' + devParameter.vpcName;
const vpcsta = new VpcStack(app, vpcstaName, vpcStackProps);