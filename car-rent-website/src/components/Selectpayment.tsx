import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectPay(props:{name:string}) {
  return (
    <Select>
      <SelectTrigger className="w-full h-[56px] text-[12p] focus:outline-none  rounded-[10px] bg-[#F6F7F9] mt-4">
        <SelectValue placeholder={props.name} className="bg-[#F6F7F9] focus:outline-none"/>
      </SelectTrigger>
      <SelectContent className="bg-gray-200">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="dummy">dummy</SelectItem>
          <SelectItem value="dummy1">dummy1</SelectItem>
          <SelectItem value="dummy2">dummy2</SelectItem>
          <SelectItem value="dummy3">dummy3</SelectItem>
          <SelectItem value="dummy4">dummy4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
