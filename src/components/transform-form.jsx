import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";

export function TransformForm() {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <Card className="py-4 w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-large">Выберите ресурс</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Select placeholder="Название ресурса">
              <SelectItem>Bimo</SelectItem>
              <SelectItem>Pepe</SelectItem>
              <SelectItem>Miko</SelectItem>
            </Select>
          </CardBody>
        </Card>
        <Card className="py-4 w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-large">Выберите модель</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Select placeholder="Название модели">
              <SelectItem>Bimo</SelectItem>
              <SelectItem>Pepe</SelectItem>
              <SelectItem>Miko</SelectItem>
            </Select>
          </CardBody>
        </Card>
      </div>
      <div className="flex gap-2">
        <Button color="success">Преобразовать данные</Button>
        <Button variant="flat" color="default">Сбросить</Button>
      </div>
    </div>
  );
}
