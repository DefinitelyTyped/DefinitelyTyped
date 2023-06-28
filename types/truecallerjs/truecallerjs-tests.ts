import {
    login,
    verifyOtp,
    search,
    bulkSearch,
    Format,
    SearchData,
    ResponseData,
  } from 'truecallerjs';

  async function runTests() {
    const phoneNumber = '+1234567890';

    const loginResponse = await login(phoneNumber);
    console.log('Login response:', loginResponse);

    const jsonData = loginResponse;
    const otp = '123456';
    const verificationResult = await verifyOtp(phoneNumber, jsonData, otp) as { installationId: string };
    console.log('Verification result:', verificationResult);

    const searchData: SearchData = {
      number: phoneNumber,
      countryCode: 'US',
      installationId: verificationResult.installationId,
    };
    const format = await search(searchData) as Format;
    console.log('Search result:', format.json());

    const bulkSearchResult = await bulkSearch(phoneNumber, 'US', verificationResult.installationId) as ResponseData;
    console.log('Bulk search result:', bulkSearchResult);
  }

  runTests().catch((error) => {
    console.error('Error:', error);
  });
