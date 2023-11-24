const ans = document.querySelector('.ans');
const input = document.querySelector('input');
const search = document.querySelector('#search');
const btnSeeAll = document.querySelector('#btn-see-all');
const allResults = document.querySelector('.all-results');
const resultDiv = document.querySelector('.result');
const key = document.querySelector('.keys');
let displayAllData;
const getData = async () => {

    const data = await d3.csv('LinkedIn_Scrapped.csv');
    search.addEventListener('click', () => {
        const result = data.filter((val) => val.Job_Title === input.value);
        console.log(result);
        let value = `<h2>${result[0].Emp_level}</h2> <br>
        <h2>${result[0].Industry}</h2> <br>
        <h2>${result[0].Class}</h2> <br>
        <h2>${result[0].Total_Applicants}</h2>`;
        ans.innerHTML = value;
        displayAllData = function (){
            let temp = '';
            result.forEach((data) => {

                temp += `<div class="job">
                <div class="keys">
                    <h2>Job_Title:</h2><br>
                    <h2>Emp_level:</h2><br>
                    <h2>Class:</h2> <br>
                    <h2>Industry:</h2> <br>
                    <h2>Company_Name:</h2> <br>
                    <h2>Location:</h2><br>
                    <h2>Total_Applicants:</h2>
                </div>
                <div class="ans">
                    <h2>${data.Job_Title}</h2> <br>
                    <h2>${data.Emp_level}</h2> <br>
                    <h2>${data.Class}</h2> <br>
                    <h2>${data.Industry}</h2> <br>
                    <h2>${data.Company_Name}</h2> <br>
                    <h2>${data.Location}</h2> <br>
                    <h2>${data.Total_Applicants}</h2>
                </div>
            </div>`;
            })

            allResults.innerHTML = temp;
            btnSeeAll.style.display = 'none';
        }
        btnSeeAll.style.display = 'initial';
        key.style.display = 'initial';
    });

    // Associate Data Alyst
    
    console.log(data);
    
}

getData();



