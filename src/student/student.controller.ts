import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get Student By Id ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return body;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update Student ${studentId} and data is ${JSON.stringify(body)}`;
  }
}
