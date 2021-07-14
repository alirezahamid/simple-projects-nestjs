import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './DTO/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.createItem(createItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.deleteItem(id);
  }
  @Put(':id')
  put(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemService.updateItem(id, updateItemDto);
  }
}
