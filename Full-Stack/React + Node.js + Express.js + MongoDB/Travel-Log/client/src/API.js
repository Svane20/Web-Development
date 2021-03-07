const API_URL = 'https://travel-log-mern-project.herokuapp.com';

export async function listLogEntries() {
  const response = await fetch(`${API_URL}/routes/logs`);
  return response.json();
}

export async function createLogEntries(entry) {
  const apiKey = entry.apiKey;
  delete entry.apiKey;
  const response = await fetch(`${API_URL}/routes/logs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify(entry),
  });
  const json = await response.json();
  if (response.ok) {
    return json;
  }
  const error = new Error(json.message);
  error.response = json;
  throw error;
}
