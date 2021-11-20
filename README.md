# AWSProject Kinesis

This project contains components to setup an AWS infrastructure. This AWS structure uses Kinesis Data Stream to ingest data, Lambda to restructure the data and Kinesis firehose to store the data in S3. The data stream is created with an EC2 instance calling https://randomuser.me/api/ and feeding the data to Kinesis Data Stream.

## Services Used:

- EC2 Instance
- Kinesis Data Stream
- Kinesis Firehose
- Lambda 
- S3