import { create } from 'zustand';

interface ScheduleItem {
    id: number;
    week: number;
    month: number;
    Task: string;
    type: string;
    user_id: number;
    Date: string;
    Day: string;
    bgcolor: string | null;
    image: string | null;
    isimage: boolean | null;
}

interface ScheduleResponse {
    status: string;
    data: ScheduleItem[];
}

interface GetScheduleState {
    schedule: ScheduleItem[];
    loading: boolean;
    error: string | null;
    fetchSchedule: (studentId: number, month: number) => Promise<void>; // Actualizado
}

const useGetScheduleStore = create<GetScheduleState>((set) => ({
    schedule: [],
    loading: false,
    error: null,
    fetchSchedule: async (studentId, month) => { // Actualizado
        set({ loading: true, error: null });
        try {
            const response = await fetch('https://neoestudio.net/api/GetSchedule', {
                method: 'POST', // Especifica el método POST
                headers: {
                    'Content-Type': 'application/json', // Indica que se envía JSON
                },
                body: JSON.stringify({ studentId, month }), // Envía los parámetros en el cuerpo
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: ScheduleResponse = await response.json();

            if (data.status === "Successfull") {
                set({ schedule: data.data, loading: false });
            } else {
                set({ error: "Error fetching schedule: Status was not successful", loading: false });
            }

        } catch (error) {
            if (error instanceof Error) {
                set({ error: error.message, loading: false });
            } else {
                set({ error: "An unknown error occurred", loading: false });
            }
        }
    },
}));

export default useGetScheduleStore;