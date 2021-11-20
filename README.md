# AWSProject Kinesis

This project contains components to setup an AWS infrastructure. This AWS structure uses Kinesis to ingest, structure and store, all in AWS.

EC2 Instance: Takes information from an API that generates a random user (https://randomuser.me/api/)

Kinesis Data Streams: Ingests and transforms the data

Kinesis Firehose: Takes data from Kinesis Data Streams, and stores it in S3