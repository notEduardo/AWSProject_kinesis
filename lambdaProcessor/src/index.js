console.log('Loading function');

exports.handler = async (event, context) => {
    /* Process the list of records and transform them */
    
    const output = event.records
    .filter(record => {
        const entry = (new Buffer(record.data, 'base64')).toString('utf8');
        console.log("Entry: ", entry);
        
        let jsonEntry = JSON.parse(entry)
        if(jsonEntry.results[0].dob.age >= 21) {
            return record;
        }
    })
    .map(record => {
        const entry = (new Buffer(record.data, 'base64')).toString('utf8');
        let jsonEntry = JSON.parse(entry)
        let newData = {
            "FIRST": jsonEntry.results[0].name.first,
            "LAST": jsonEntry.results[0].name.last,
            "AGE": jsonEntry.results[0].dob.age,
            "GENDER": jsonEntry.results[0].gender,
            "LATITUDE": jsonEntry.results[0].location.coordinates.latitude,
            "LONGITUDE": jsonEntry.results[0].location.coordinates.longitude
        };
        console.log("tst" + JSON.stringify(newData))
        const payload = (new Buffer(JSON.stringify(newData), 'utf8')).toString('base64');
        
        return {
                    recordId: record.recordId,
                    result: 'Ok',
                    data: payload,
        };
    });
    console.log(`Processing completed.  Successful records ${output.length}.`);
    return { records: output };
};
