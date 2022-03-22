import { Controller, Get , Post , Put ,Delete , Body  ,Param} from '@nestjs/common';
import { CreateItemDto, updateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService:ItemsService){}
    @Get()
  async  findAll(): Promise<Item[]> { 
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<Item>{
        return this.itemsService.findOne(id)
    }

    @Post( )
    create(@Body() createitemdto : CreateItemDto): Promise<Item>{
        return this.itemsService.create(createitemdto)
    }

    @Delete(':id')
    delete(@Param('id') id):Promise<Item>{
        return this.itemsService.delete(id)
    }
 
    @Put(':id')
    put(@Body() updateItemDto : updateItemDto , @Param('id')id ):Promise<Item>{
        return this.itemsService.update(id , updateItemDto)
    }
}
