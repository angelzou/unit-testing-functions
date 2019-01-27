export const createMockXHR = (responseJSON) => {
  const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    readyState: 4,
    responseText: JSON.stringify(
      responseJSON || {}
    )
  };
  return mockXHR;
}
