import { Ref, ref } from "vue";

interface ListItem {
    name: string;
    id: number;
    task?: string;
}

interface Column {
    name: string;
    tasks: [];
}

let createdColumns:Ref<Column[]> = ref([]);

let createdTusks: Ref<ListItem[]> = ref([]);

let completedTusks: Ref<ListItem[]> = ref([]);

let tuskCounter = ref(1);

const dragItem = (event) => {
    const movedElement = event.item
    console.log(event)
    const oldList = event.sourceList
    const newList = event.targetList

    if (oldList !== newList) {
        const movedElementIndex = event.oldIndex

        oldList.value.splice(movedElementIndex, 1)

        const newIndex = event.newIndex
        newList.value.splice(newIndex, 0, movedElement)

    }
}

export default function useTodoList() {

    return {
        createdColumns,
        createdTusks,
        completedTusks,
        tuskCounter,
        dragItem
    }
}