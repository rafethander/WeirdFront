import { Question } from './Question';

export interface Exam{
    id: string,
    isCreated: Date,
    name: string,
    isCreatedString: string,
    questions: Question[]
}

