import { useQuery } from '@tanstack/react-query';


const clientId = process.env.UNSPLASH_API_KEY; 
const staleTime = 1000 * 60 * 60 * 2; // 2 hours



const UNSPLASH_ROOT = 'https://api.unsplash.com';

export const getPhotosByQuery = async ({ query }: { query: string }) => {
    const response = await fetch(
        `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=LKotLzZSqLhoQyeM1D_lwbljh0oIUULKkL0iEzCShU0&per_page=20`
    );
    const data = await response.json();
    return data;
}

export const useGetPhotosByQuery = ({ query }: { query: string }) =>
    useQuery({
        queryKey: ['photos', query],
        queryFn: () => getPhotosByQuery({ query }),
        staleTime,
});