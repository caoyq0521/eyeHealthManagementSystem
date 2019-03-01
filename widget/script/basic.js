const SERVER_URL = 'http://192.168.0.226:8909/api/V1.0';

function post(url, data, successCallback) {
    api.ajax({
        headers: {
            "X-APICloud-AppId": "A6005584828914",
            "X-APICloud-AppKey": "FCD9627E-F21A-8BA8-367A-21ADDD4A3820"
        },
        url: SERVER_URL + url,
        method: 'post',
        data: data,
    }, function(ret, err) {
        if (ret) {
            successCallback(ret)
        } else {
            alert(JSON.stringify(err));
        }
    });
}

/**
 * 视力(E字表)  根据值计算相应的视力
 */
function calculaEData(val) {
    switch (val) {
        case '无光感':
            val = 30;
            break;
        case '光感':
            val = 31;
            break;
        case '手动':
            val = 32;
            break;
        case '数指':
            val = 33;
            break;
        case '3.0':
            val = 34;
            break;
        case '3.1':
            val = 35;
            break;
        case '3.2':
            val = 36;
            break;
        case '3.3':
            val = 37;
            break;
        case '3.4':
            val = 38;
            break;
        case '3.5':
            val = 39;
            break;
        case '3.6':
            val = 40;
            break;
        case '3.7':
            val = 41;
            break;
        case '3.8':
            val = 42;
            break;
        case '3.85':
            val = 43;
            break;
        case '3.9':
            val = 44;
            break;
        case '3.95':
            val = 45;
            break;
        case '4.0':
            val = 46;
            break;
        case '4.1':
            val = 47;
            break;
        case '4.2':
            val = 48;
            break;
        case '4.3':
            val = 49;
            break;
        case '4.4':
            val = 50;
            break;
        case '4.5':
            val = 51;
            break;
        case '4.6':
            val = 52;
            break;
        case '4.7':
            val = 53;
            break;
        case '4.8':
            val = 54;
            break;
        case '4.85':
            val = 55;
            break;
        case '4.9':
            val = 56;
            break;
        case '4.95':
            val = 57;
            break;
        case '5.0':
            val = 58;
            break;
        case '5.1':
            val = 59;
            break;
        case '5.2':
            val = 60;
            break;
        case '5.3':
            val = 61;
            break;
        case '5.4':
            val = 62;
            break;
        case '5.5':
            val = 63;
            break;
        case '5.6':
            val = 64;
            break;
        case '5.7':
            val = 65;
            break;
        case '5.8':
            val = 66;
            break;
        case '5.9':
            val = 67;
            break;
        case '6.0':
            val = 68;
            break;
    }
    return val;
}