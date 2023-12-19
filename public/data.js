async function fetchUsers() {
  try {
    const response = await fetch('https://random-data-api.com/api/v2/users');
    const data = await response.json();

    const userInfoContainer = document.getElementById('UserInfo');
    userInfoContainer.innerHTML = `
    <p>ID: ${data.id}</p>
    <p>UID: ${data.uid}</p>
    <p>First Name: ${data.first_name}</p>
    <p>Last Name: ${data.last_name}</p>
    <p>Username: ${data.username}</p>
    <p>Email: ${data.email}</p>
    <p>Avatar: <img src="${data.avatar}" alt="Avatar"></p>
    <p>Gender: ${data.gender}</p>
    <p>Phone Number: ${data.phone_number}</p>
    <p>Social Insurance Number: ${data.social_insurance_number}</p>
    <p>Date of Birth: ${data.date_of_birth}</p>
    <p>Employment Title: ${data.employment.title}</p>
    <p>Employment Key Skill: ${data.employment.key_skill}</p>
    <p>City: ${data.address.city}</p>
    <p>Street Name: ${data.address.street_name}</p>
    <p>Street Address: ${data.address.street_address}</p>
    <p>Zip Code: ${data.address.zip_code}</p>
    <p>State: ${data.address.state}</p>
    <p>Country: ${data.address.country}</p>
    <p>Credit Card Number: ${data.credit_card.cc_number}</p>
    <p>Subscription Plan: ${data.subscription.plan}</p>
    <p>Subscription Status: ${data.subscription.status}</p>
    <p>Payment Method: ${data.subscription.payment_method}</p>
    <p>Subscription Term: ${data.subscription.term}</p>
  `;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
async function fetchBank() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/banks');
      const data = await response.json();

      const bankInfoContainer = document.getElementById('BankInfo');
      bankInfoContainer.innerHTML = `
        <p>ID: ${data.id}</p>
        <p>UID: ${data.uid}</p>
        <p>Account Number: ${data.account_number}</p>
        <p>IBAN: ${data.iban}</p>
        <p>Bank Name: ${data.bank_name}</p>
        <p>Routing Number: ${data.routing_number}</p>
        <p>SWIFT/BIC: ${data.swift_bic}</p>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function fetchAddress() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/addresses');
      const data = await response.json();

      const addressInfoContainer = document.getElementById('AddressInfo');
      addressInfoContainer.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>UID: ${data.uid}</p>
      <p>City: ${data.city}</p>
      <p>Street Name: ${data.street_name}</p>
      <p>Street Address: ${data.street_address}</p>
      <p>Secondary Address: ${data.secondary_address}</p>
      <p>Building Number: ${data.building_number}</p>
      <p>Mail Box: ${data.mail_box}</p>
      <p>Community: ${data.community}</p>
      <p>Zip Code: ${data.zip_code}</p>
      <p>Zip: ${data.zip}</p>
      <p>Postcode: ${data.postcode}</p>
      <p>Time Zone: ${data.time_zone}</p>
      <p>Street Suffix: ${data.street_suffix}</p>
      <p>City Suffix: ${data.city_suffix}</p>
      <p>City Prefix: ${data.city_prefix}</p>
      <p>State: ${data.state}</p>
      <p>State Abbreviation: ${data.state_abbr}</p>
      <p>Country: ${data.country}</p>
      <p>Country Code: ${data.country_code}</p>
      <p>Latitude: ${data.latitude}</p>
      <p>Longitude: ${data.longitude}</p>
      <p>Full Address: ${data.full_address}</p>
    `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function fetchApp() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/appliances');
      const data = await response.json();

      const applianceInfoContainer = document.getElementById('ApplianceInfo');
      applianceInfoContainer.innerHTML = `
        <p>ID: ${data.id}</p>
        <p>UID: ${data.uid}</p>
        <p>Brand: ${data.brand}</p>
        <p>Equipment: ${data.equipment}</p>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function fetchBeer() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/beers');
      const data = await response.json();

      const beerInfoContainer = document.getElementById('BeerInfo');
      beerInfoContainer.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>UID: ${data.uid}</p>
      <p>Brand: ${data.brand}</p>
      <p>Name: ${data.name}</p>
      <p>Style: ${data.style}</p>
      <p>Hop: ${data.hop}</p>
      <p>Yeast: ${data.yeast}</p>
      <p>Malts: ${data.malts}</p>
      <p>IBU: ${data.ibu}</p>
      <p>Alcohol: ${data.alcohol}</p>
      <p>BLG: ${data.blg}</p>
    `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function fetchBlood() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/blood_types');
      const data = await response.json();

      const bloodInfoContainer = document.getElementById('BloodInfo');
      bloodInfoContainer.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>UID: ${data.uid}</p>
      <p>type: ${data.type}</p>
      <p>Rh_factor: ${data.rh_factor}</p>
      <p>Group: ${data.group}</p>
    `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  async function fetchCredit() {
    try {
      const response = await fetch('https://random-data-api.com/api/v2/credit_cards');
      const data = await response.json();

      const creditInfoContainer = document.getElementById('CreditInfo');
      creditInfoContainer.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>UID: ${data.uid}</p>
      <p>Credit Card Number: ${data.credit_card_number}</p>
      <p>Expiry Date: ${data.credit_card_expiry_date}</p>
      <p>Credit Card Type: ${data.credit_card_type}</p>
    `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  window.onload = function() {
    const buttons = document.getElementsByClassName("button1")
    console.log(buttons)
    Array.from(buttons).forEach((e)=> {
      console.log(e.innerText)
      e.onclick = function() {
        fetch (window.location.origin + "/buttons", {
          "method": "POST",
          "headers":{
            "button_name": e.innerText
          }
        })
        if (e.innerText == "User Data"){
          fetchUsers()
        }
        else if (e.innerText == "Bank Data"){
        fetchBank()
        }
        else if (e.innerText == "Address Data"){
          fetchAddress()
        }
        else if (e.innerText == "Appliance Data"){
          fetchApp()
        }
        else if (e.innerText == "Beer Data"){
          fetchBeer()
        }
        else if (e.innerText == "Blood Data"){
          fetchBlood()
        }
        else if (e.innerText == "Credit Data"){
          fetchCredit()
        }
      }
    })
  }