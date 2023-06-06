export {fileFormat8k_2_fps}

const fileFormat8k_2_fps = async (urlEndpoint) => {

    const body = {'name': 'camera.setOptions',
                "parameters": {
                    "options": {
                        "fileFormat": {"type": "mp4",
                        "width": 7680,
                        "height": 3840, 
                        "_codec": "H.264/MPEG-4 AVC", 
                        "_frameRate": 2}
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

