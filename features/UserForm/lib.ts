import { Stage } from './type';

export function getFormTitle(stage: Stage) {
    const stageDict = {
        start: '',
        name: '(имя)',
        surname: '(фамилия)',
        phone: ''
    }

    return `Пользователь ${stageDict[stage]}`
}