import truecallerjs, { Format, SearchData, ResponseData, LoginResponse } from 'truecallerjs';

async function runTests() {
  const phoneNumber = '+1234567890';

  const loginResponse: LoginResponse = await truecallerjs.login(phoneNumber);
  console.log('Login response:', loginResponse);

  const jsonData: LoginResponse = loginResponse;
  const otp = '123456';
  const verificationResult = await truecallerjs.verifyOtp(phoneNumber, jsonData, otp) as { installationId: string };
  console.log('Verification result:', verificationResult);

  const searchData: SearchData = {
    number: phoneNumber,
    countryCode: 'US',
    installationId: verificationResult.installationId,
  };
  const format = await truecallerjs.search(searchData) as Format;
  console.log('Search result:', format.json());

  const bulkSearchResult = await truecallerjs.bulkSearch(phoneNumber, 'US', verificationResult.installationId) as ResponseData;
  console.log('Bulk search result:', bulkSearchResult);
}

runTests().catch((error) => {
  console.error('Error:', error);
});
