import axios from 'axios';
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;

    baseUrl = import.meta.env.VITE_API_BASE_URL;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Interceptor de resposta (opcional: tratar erros globais)
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                console.error('API Error:', error.response?.data || error.message);
                return Promise.reject(error);
            }
        );
    }

    // GET genérico
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    // POST genérico
    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }

    // PUT genérico
    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data, config);
        return response.data;
    }

    // DELETE genérico
    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url, config);
        return response.data;
    }
}

export const api = new ApiService();