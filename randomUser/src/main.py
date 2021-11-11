import requests
import boto3
import json
import uuid

counter = 0
client = boto3.client('kinesis', region_name='us-east-1')
pKey = str(uuid.uuid4)
while(counter < 10000):
    counter = counter + 1
    person = requests.get('https://randomuser.me/api/')
    data = json.dumps(person.json())
    print(data)
    client.put_record(StreamName='randomUsers', Data=data, PartitionKey=pKey)
