import requests
import boto3
import json

counter = 0
client = boto3.client('kinesis', region_name='us-east-1')
while(counter < 100):
    counter = counter + 1
    person = requests.get('https://randomuser.me/api/')
    data = json.dumps(person.json())
    print(data)
    client.putRecord(data)
