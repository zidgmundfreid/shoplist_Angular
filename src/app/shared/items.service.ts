import { Injectable, Input } from "@angular/core";


export interface item {
    checked: boolean
    name: string
    id: number
}

@Injectable({ providedIn: 'root' })
export class ItemsService {

    elements: item[] = []

    public items: item[] = [
        { id: 0, name: 'Сыр', checked: false },
        { id: 1, name: 'Колбаса', checked: false },
        { id: 2, name: 'Молоко', checked: false },
        { id: 3, name: 'Хлеб', checked: false },
        { id: 4, name: 'Пивко', checked: false },
    ]

    onToggle(id: number) {
        let idx = this.items.findIndex(t => t.id === id)

        this.items[idx].checked = !this.items[idx].checked

        if (this.items[idx].checked) {
            this.items.push(this.items[idx])
            this.items.splice(this.items.findIndex(t => t.id === id), 1)
        } else {
            this.items.splice(0, 0, this.items.splice(idx, 1)[0]);
        }
    }
}