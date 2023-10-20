// Utility function to make API requests with a bearer token
export const request = async <T>(url: string, options?: RequestInit): Promise<T> => {
  // Get the bearer token from local storage (assuming it's stored under 'token' key)
  // const token = localStorage.getItem('access_token')

  // Add the bearer token to the 'Authorization' header
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    // ...(token && { Authorization: `Bearer ${token}` }),
  }

  // Make the fetch request with the provided URL, options, and headers
  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  // Parse the response as JSON and return it
  const data: T = await response.json()
  return data
}
