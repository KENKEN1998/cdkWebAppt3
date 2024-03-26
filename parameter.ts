import { Environment } from 'aws-cdk-lib';

export interface AppParameter {
  env?: Environment;
  envName: string;
  s3BucketName: string;
  
  //vpc
  vpcName?: string;
  vpcMaxAzs?: number;
  vpcNatGateways?: number;
  natGatewaySubnetCidr? : number;
  ec2SubnetCidr?: number;
  rdsSubnetCidr?: number;
}

// Example for Develop Development
export const devParameter: AppParameter = {
  envName: 'Development',
  env: { account: '976921358976', region: 'us-east-1' },
  s3BucketName: '',
  //vpc
  vpcName: 'lab81-proj-vpc',
  vpcMaxAzs: 2,
  vpcNatGateways: 1,
  natGatewaySubnetCidr: 24,
  ec2SubnetCidr: 24,
  rdsSubnetCidr: 24,
  
};

