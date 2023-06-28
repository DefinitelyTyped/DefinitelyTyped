import truecallerjs from 'truecallerjs';

async function runTests() {
  const phoneNumber = '+1234567890';
  const loginResponse = await truecallerjs.login(phoneNumber);
  console.log('Login response:', loginResponse);

  const jsonData = loginResponse;
  const otp = '123456';
  const verificationResult = await truecallerjs.verifyOtp(phoneNumber, jsonData, otp);
  console.log('Verification result:', verificationResult);

  const searchData = {
    number: phoneNumber,
    countryCode: 'US',
    installationId: verificationResult.installationId,
  };
  const format = await truecallerjs.search(searchData);
  console.log('Search result:', format.json());

  const bulkSearchResult = await truecallerjs.bulkSearch(phoneNumber, 'US', verificationResult.installationId);
  console.log('Bulk search result:', bulkSearchResult);
}

runTests().catch((error) => {
  console.error('Error:', error);
});
