// app/services/clashService.tsx
import axios from 'axios';

const API_BASE_URL = 'https://api.clashroyale.com/v1';
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImZkNWI1M2U5LTUxMWItNGY3Yy04NjkxLTk1NWU4Njk2ZjkzMiIsImlhdCI6MTcyNDIwMTA4Miwic3ViIjoiZGV2ZWxvcGVyL2ExYmJlYTQ5LTQzMzktOGJlOS0xYzNlLTEyNDdhNWU2ZjkxOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuNjIuODQuNjEiXSwidHlwZSI6ImNsaWVudCJ9XX0.mSPO-rYeLmwJ8R7PiZj3dRCokiLO0wCoqr6_cOy2HaK28rU2vE-_pjHDftmLBVhqSYlDmTNihTJFVOlFdjE7pA';

const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
};

export const fetchCards = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cards`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching cards:', error);
        return { items: [] };
    }
};

export const fetchPlayer = async (tag: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/players/%23${tag}`, { headers });
        return response.data;
    } catch (error) {
        console.error('Error fetching player:', error);
        return null;
    }
};
