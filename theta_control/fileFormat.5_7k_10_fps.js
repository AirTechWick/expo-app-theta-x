export {fileFormat5_7k_10_fps}

const fileFormat5_7k_10_fps = async (urlEndpoint) => {

    const body = {'name': 'camera.setOptions',
                "parameters": {
                    "options": {
                        "fileFormat": {"type": "mp4","width": 5760,"height": 2880, "_codec": "H.264/MPEG-4 AVC", "_frameRate": 10}
            }   
        }
    }

    const response = await fetch(
        `${urlEndpoint}commands/execute`, 
        {method: 'POST', 
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    });

    const data =  await response.json();

    const prettyData = JSON.stringify(data, null, 4)

    return prettyData
};

