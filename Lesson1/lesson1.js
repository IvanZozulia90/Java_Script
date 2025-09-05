// let students =
// [
//     {name: "Ivan", age:35},
//     {name: "Olga", age:32},
//     {name: 'Igor', age:25}
// ]



// for(person of students){
//     if(person.age < 30){
//         console.log(person)
//     }
// }

// let temperature = 25;

// let temperatureResult = (temperature >=25) ? "Гаряче" : "Холодно";
// console.log(temperatureResult)

async function postData() {
    const url = 'https://seller-aws-prod.foxtrot.ua/api/2.0/pickups/by-filter';
    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJJczVwc1VrQXEzaVo5SjFTbThHdGdwVEpuMk9SekdVLWh2dnp4MjFpUm1jIn0.eyJleHAiOjE3NTY5MDk5ODEsImlhdCI6MTc1NjkwODE4MSwiYXV0aF90aW1lIjoxNzU2OTA4MTgwLCJqdGkiOiJvbnJ0YWM6YmE0MGQ1OTQtMzA0Zi02MjAwLTcxNDEtNmQ2ODJmZjQxOTg3IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLXByb2QuZm94dHJvdC51YS9yZWFsbXMvZm94dHJvdCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzNTY3MjI0Yi1hOWIxLTQ2MzItOTc3NS1jN2QyMzA1ZTkyZmMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzZWxsZXItbW9iaWxlIiwic2lkIjoiYzU0Y2E4ZTgtM2EzOC00NmNmLThlY2ItOTQ3NzZiNDM1MDcwIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWZveHRyb3QiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCB0eXBob29uLXVzZXJuYW1lIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoi0IbQstCw0L0g0JfQvtC30YPQu9GPIiwidHlwaG9vbl91c2VybmFtZSI6IlpPWlVMWUFfSVYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ6b3p1bGlhLWl2IiwiZ2l2ZW5fbmFtZSI6ItCG0LLQsNC9IiwiZmFtaWx5X25hbWUiOiLQl9C-0LfRg9C70Y8iLCJlbWFpbCI6IlpvenVsaWEtSXZAZm94dGVhbS5kaWdpdGFsIn0.XXQ30c6am8YEpMdXQlUAHOlxGNFU4jmYhIZeoUi7Hbo2dxFyzFSNzM-y5BSl4s3jaN3f_Rb5DYDvNUGvw6-JbjVHgsgVpTbxn49ukToMWE991t6oU--p3w-mJskpg6ZQ5jsXCSaZ2JI7jX8V02kICky3N1I5_-gvKYAKvE6ydZcrJ_ox4UeNuWf_5OjxplEq3-A0Te4-GXG_rz5d8q8GxLXl0Knk3A8UUhh9UftX_VJ2dXny0bNzLXIfDycCCG5es7GlDA-wCpE8ezVz_eIwv05X68bbpfHw7MlCk-KlE7GjtamwWbI4w8pQpYX_yq7OngWPTXM0Ul8_LEI2U3rOCA';

    //body request
    const bodyData = {
        fDate: "2025-09-03T07:00:27.910Z",
        isClientCart: null,
        pickupId: 0,
        shopId: 7858,
        tDate: "2025-09-04T14:13:27.915Z",
        telNum: ""
    };

    try{
            const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyData)
    });

    const pickUp = await response.json();
    return pickUp

    }catch (error){
        console.error('Помилка при POST-запиті:', error);
    }
    
}


(async () => {
  const pickUp = await postData();
//   console.log('Результат:', pickUp);
})();


console.log(postData)


