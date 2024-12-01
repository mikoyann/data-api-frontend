import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useResources } from "../hooks/use-resources";
import { useModels } from "../hooks/use-models";
import { useState } from "react";
import { useTransform } from "../hooks/use-transform";

export function TransformForm() {
  const resources = useResources();
  const models = useModels();
  const [selectedResource, setSelectedResource] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const {requestTransform} = useTransform()
  const onSubmit = () => {
    requestTransform(selectedResource, selectedModel)
  }
  const onReset = () => {
    setSelectedResource(undefined)
    setSelectedModel(undefined)
  }

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex gap-4">
        <Card className="py-4 w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-large">Выберите ресурс</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Select
              aria-label="select-resource"
              placeholder="Название ресурса"
              onChange={(event) => {
                const value = resources[event.target.value];
                setSelectedResource(value);
              }}
            >
              {resources.map((resource, index) => {
                return (
                  <SelectItem aria-label={resource.name} key={index}>
                    {resource.name}
                  </SelectItem>
                );
              })}
            </Select>
          </CardBody>
        </Card>
        <Card className="py-4 w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="font-bold text-large">Выберите модель</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Select
              onChange={(event) => {
                const value = models[event.target.value];
                setSelectedModel(value);
              }}
              aria-label="select-model"
              placeholder="Название модели"
            >
              {models.map((model, index) => {
                return <SelectItem key={index}>{model.name}</SelectItem>;
              })}
            </Select>
          </CardBody>
        </Card>
      </div>
      <div className="flex gap-2">
        <Button color="success" onClick={onSubmit}>Преобразовать данные</Button>
        <Button variant="flat" color="default" onClick={onReset}>
          Сбросить
        </Button>
      </div>
    </div>
  );
}
